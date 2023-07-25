import { NextResponse } from 'next/server';

// TODO: it can be achieved by Airtable.js client
export async function GET() {
    const response = await fetch('https://api.airtable.com/v0/appI7ZdjlgvZUJG3a/emplyees', {
        headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
        },
        next: {
            revalidate: 10,
        }
    });
    const data = await response.json();
    return NextResponse.json(data.records);
}