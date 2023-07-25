import { NextResponse } from 'next/server';

/**
Static Data Fetching (Default)

By default, Next.js will cache the result of `fetch()` requests that do not specifically opt out of caching behavior. This means that fetch requests that do not set a `cache` option will use the `force-cache` option.

If any fetch requests in the route use the `revalidate` option, the route will be re-rendered statically during revalidation.

To learn more about caching data fetching requests, see the [Caching and Revalidating](https://nextjs.org/docs/app/building-your-application/data-fetching/caching) page.
*/

// TODO: it can be achieved by Airtable.js client
export async function GET() {
    const response = await fetch(`${process.env.AIRTABLE_BASE_URL}/employees`, {
        headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
        },
        // cache: 'no-store',
        // next: {
        //     revalidate: 0,
        // }
    });
    const data = await response.json();
    return NextResponse.json(data.records);
}