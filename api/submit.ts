
export default async function handler(req: any, res: any) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { type, data } = req.body;

    // ---------------------------------------------------------
    // [Database Logic Placeholder]
    // 실제 배포 시 이곳에 DB 저장 로직을 구현합니다.
    // 예: Vercel Postgres, Supabase, MongoDB 등
    // ---------------------------------------------------------

    console.log(`[Serverless Function] New Submission Received:`);
    console.log(`Type: ${type}`);
    console.log(`Data:`, JSON.stringify(data, null, 2));

    // Simulate processing delay
    // await new Promise(resolve => setTimeout(resolve, 500));

    return res.status(200).json({ 
      success: true, 
      message: 'Data received and logged successfully.' 
    });

  } catch (error) {
    console.error('[Serverless Function] Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
