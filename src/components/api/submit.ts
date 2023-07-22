import { google, sheets_v4 } from 'googleapis'

type SheetForm = {
    firstName: string
    lastName: string
    email: string
    location: string
    christian: string
    gender: string
    workplace: string
    role: string
    group: string
    timeSlot: string
    timeSlot2: string
    timeSlot3: string
}

export default async function handler(req: { method: string; body: SheetForm }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: any }): any; new(): any }; json: { (arg0: { data: sheets_v4.Schema$AppendValuesResponse }): any; new(): any } } }) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only Post requests are allowed'})
    }

    const body = req.body as SheetForm

    console.log(body);

    try {
        // prepare auth
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ]
        });

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.REACT_APP_GOOGLE_SPREADSHEET_ID,
            range: 'A1:L1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.firstName, body.lastName, body.email, body.location, body.christian, body.gender, body.workplace, body.role, body.group, body.timeSlot, body.timeSlot2, body.timeSlot3]
                ]
            }
        })

        return res.status(200).json({
            data: response.data
        })

    } catch (e) {
        console.error(e);
        return res.status(500).send({message: 'Something went wrong'})
    }
}

