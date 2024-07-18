import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CryptoJS from 'crypto-js';

export default function Component() {
  const [result, setResult] = useState<string>('');
  
  const encryptionKey = 'FtmJ7frzTyWOzintybbqIWzwwclcPtaI';
  const accessToken = '0e186445-0647-417c-ae27-8098533f1914';
  const campaignID = '6a0fa162-fb4c-4074-a6d4-402744e3590b';

  useEffect(() => {
    // Agar script ko API se fetch karna ho to yahan se fetch kar sakte hain
    const scriptContent = ''; // Set the AFScript content from your API response here
    if (scriptContent) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.innerHTML = scriptContent;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const phoneNumber = form.phone.value;

    const transactionID = 'unique_transaction_id'; 

    const data = {
      DeviceInfo: {
        PackageName: 'com.test.com',
        LangCode: 'en',
        DeviceID: 'test_dev_doc'
      },
      Referrer: {
        Affiliate: {
          Campaign: campaignID,
          Country: 'IQ',
          firstPageButtonID: 'msisdn-entry',
          secondPageButtonID: 'pin-entry'
        }
      },
      Request: {
        Action: 1,
        TransactionID: transactionID,
        SessionID: '',
        MSISDN: '+964' + phoneNumber,
        PinCode: ''
      }
    };

    const encrypt = (data: string, key: string): string => {
      const iv = key.substring(0, 16);
      const encrypted = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
      });
      return encrypted.toString();
    };

    const decrypt = (data: string, key: string): string => {
      const iv = key.substring(0, 16);
      const decrypted = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
      });
      return decrypted.toString(CryptoJS.enc.Utf8);
    };

   
    const encryptedData = encrypt(JSON.stringify(data), encryptionKey);

    try {
      const response = await fetch('https://d3398n96t5wqx9.cloudfront.net/UsersAquisition/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ data: encryptedData })
      });

      const responseData = await response.json();
      const decryptedData = decrypt(responseData.data, encryptionKey);

      setResult(JSON.stringify(decryptedData, null, 2)); 
    } catch (error : any) {
      setResult(`Error: ${error.message}`); 
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary py-8 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-primary-foreground">Get in Touch</h1>
          <p className="mt-2 text-muted-foreground">Reach out to us for more information.</p>
        </div>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-[80px_1fr] items-center gap-4">
              <label htmlFor="country-code" className="text-right font-medium">
                Country
              </label>
              <Input id="country-code" type="tel" defaultValue="+964" className="max-w-[80px]" readOnly />
            </div>
            <div className="grid grid-cols-[80px_1fr] items-center gap-4">
              <label htmlFor="phone" className="text-right font-medium">
                Phone
              </label>
              <Input id="phone" name="phone" type="tel" placeholder="123 456 7890" required />
            </div>
            <div className="flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold">Response</h2>
            <div className="rounded-lg border bg-background p-4 text-muted-foreground">
              <pre>
                {result}
              </pre>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted py-4 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl flex flex-col items-center gap-2 text-xs text-muted-foreground">
          <div className="flex gap-4">
            <Link to="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:underline">
              Terms &amp; Conditions
            </Link>
          </div>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
