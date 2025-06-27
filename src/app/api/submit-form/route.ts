import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const formName = formData.get('form-name') as string;
    
    if (!formName) {
      return NextResponse.json({ error: 'Form name is required' }, { status: 400 });
    }

    // Create the form data for Netlify
    const netlifyFormData = new FormData();
    
    // Add all form fields
    for (const [key, value] of formData.entries()) {
      if (value !== null && value !== undefined) {
        netlifyFormData.append(key, value.toString());
      }
    }

    // Submit to Netlify's form handling
    const response = await fetch('/', {
      method: 'POST',
      body: netlifyFormData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.ok) {
      console.log(`Form ${formName} submitted successfully to Netlify`);
      return NextResponse.json({ success: true });
    } else {
      console.error(`Form ${formName} submission failed:`, response.status, response.statusText);
      return NextResponse.json({ error: 'Form submission failed' }, { status: response.status });
    }
  } catch (error) {
    console.error('Error handling form submission:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 