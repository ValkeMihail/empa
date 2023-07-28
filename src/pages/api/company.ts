import { NextApiRequest, NextApiResponse } from 'next';
import { connectClient } from '@/utils/mongo';
import { CompanyData, TokenData } from '../../../types';
import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {


  const token = req.headers.authorization;
  let companyId : ObjectId;

  if ( req.method !== 'GET' ) {
    return res.status(405).json({ message: 'Method not allowed' });
  }


  if (!token) {
  
    return res.status(401).json({ message: 'Not Authorized' });
  
  }else {
  
    const decodedToken = jwt.decode(token);
    if (!decodedToken) {
      return res.status(401).json({ message: 'Not Authorized' });
    }
    const tokenData = decodedToken as TokenData;
    companyId = new ObjectId(tokenData.companyId);
    
    

    if (!companyId) {
      return res.status(401).json({ message: 'Not Authorized' });
    }
  }


  try {

    const db = await connectClient();
    const companiesCol = db.collection<CompanyData>('companies');
    const company = await companiesCol.findOne({ _id: companyId  });





    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    return res.status(200).json({ company });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
