// netlify/functions/subscribe.mjs
import fetch from 'node-fetch';

export const handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Accetta solo POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const { email, city } = JSON.parse(event.body);

    // Validazione
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Email non valida' })
      };
    }

    // Chiama MailerLite
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_API_TOKEN}`
      },
      body: JSON.stringify({
        email: email,
        fields: {
          city: city || 'Non specificata'
        },
        groups: [process.env.MAILERLITE_GROUP_ID]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('MailerLite error:', data);
      throw new Error(data.message || 'Errore durante l\'iscrizione');
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        message: 'Iscrizione completata con successo!' 
      })
    };

  } catch (error) {
    console.error('Subscription error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        message: error.message || 'Errore del server'
      })
    };
  }
};