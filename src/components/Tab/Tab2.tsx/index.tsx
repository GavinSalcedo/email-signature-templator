import TabContentLayout from '../../../layout/TabContentLayout';
import { Input, Typography } from '../../Common';

function Tab2() {
  return (
    <TabContentLayout>
      <Typography className="font-semibold text-white text-left text-xl" type="h3">
        Enter Your Signature <br /> Details
      </Typography>
      <Input placeholder="Juan" label="First Name" />
      <Input placeholder="Dela Cruz" label="Last Name" />
      <Input placeholder="Project Manager" label="Job Title" />
      <Input placeholder="Management" label="Department" />
      <Input placeholder="Hubspot" label="Company" />
      <Input placeholder="111 222 3333" label="Office Phone Number" />
      <Input placeholder="111 222 333" label="Mobile Phone Number" />
      <Input placeholder="wwww.google.com" label="Website URL" />
      <Input placeholder="juan@delacruz.com" label="Email Address" />

      <div className="flex flex-col gap-12">
        <Typography className="font-semibold text-white text-left text-xl" type="h3">
          Enter Your Social Links
        </Typography>
        <Input placeholder="LinkedIn" label="https//linkedin.com" />
        <Input placeholder="Facebook" label="htts://facebook.com" />
        <Input placeholder="Twitter" label="htts://twitter.com" />
        <Input placeholder="Instagram" label="htts://instagram.com" />
      </div>
    </TabContentLayout>
  );
}

export default Tab2;
