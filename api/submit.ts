
// Vercel Serverless Function Example
// This file usually resides in the '/api' directory in a Vercel project.

export default async function handler(req: any, res: any) {
  // CORS configuration (Optional, depending on deployment)
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
    // 여기에 실제 데이터베이스 저장 로직을 구현합니다.
    // 예: MongoDB, PostgreSQL, Supabase, Firebase 등 연결
    //
    // const db = await connectToDatabase();
    // await db.collection('applications').insertOne({
    //   type,      // 'SEMINAR_SPONSORSHIP' | 'CONSULTATION'
    //   ...data,   // 사용자 입력 데이터
    //   createdAt: new Date(),
    // });
    // ---------------------------------------------------------

    console.log(`[Serverless Function] Received submission type: ${type}`);
    console.log(`[Serverless Function] Data:`, data);

    // Simulate processing delay
    // await new Promise(resolve => setTimeout(resolve, 500));

    return res.status(200).json({ 
      success: true, 
      message: 'Application received and saved successfully.' 
    });

  } catch (error) {
    console.error('[Serverless Function] Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
