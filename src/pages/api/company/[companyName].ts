import { NextApiRequest, NextApiResponse } from 'next';
import { connectClient } from '@/utils/mongo';
import { CompanyData } from '../../../../types';

export default async function getCompanyData(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization;
  const { companyName } = req.query; 

  if (!token) {
    return res.status(401).json({ message: 'Not Authorized' });
  }

  try {

    if (!companyName) {
      return res.status(400).json({ message: 'Company name is missing' });
    }

    const db = await connectClient();
    const companiesCol = db.collection<CompanyData>('companies');
    const company = await companiesCol.findOne({ companyName: companyName });

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    return res.status(200).json({ company });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
