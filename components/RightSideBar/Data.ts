export interface ProfileItemInterface {
  id: number;
  name: string;
  iconPath: string;
  value: string;
}

export const ProfileItemData: ProfileItemInterface[] = [
  {
    id: 1,
    name: "Date Of Birth",
    iconPath: "/icons/BirthIcon.svg",
    value: "August 23, 1996",
  },
  {
    id: 2,
    name: "Gender",
    iconPath: "/icons/FemaleIcon.svg",
    value: "Female",
  },
  {
    id: 3,
    name: "Contact Info.",
    iconPath: "/icons/PhoneIcon.svg",
    value: "(415) 555-1234",
  },
  {
    id: 4,
    name: "Emergency Contacts",
    iconPath: "/icons/PhoneIcon.svg",
    value: "(415) 555-5678",
  },
  {
    id: 5,
    name: "Insurance Provider",
    iconPath: "/icons/InsuranceIcon.svg",
    value: "Sunrise Health Assurance",
  },
];

export interface LabResultDataProps {
  id: number;
  name: string;
  downloadLink: string;
}

export const LabResultsData: LabResultDataProps[] = [
  {
    id: 1,
    name: "Blood Test",
    downloadLink: "Blood Test",
  },
  {
    id: 2,
    name: "CT Scans",
    downloadLink: "Blood Test",
  },
  {
    id: 3,
    name: "Radiology Reports",
    downloadLink: "Blood Test",
  },
  {
    id: 4,
    name: "X-Rays",
    downloadLink: "Blood Test",
  },
  {
    id: 5,
    name: "Urine Test",
    downloadLink: "Blood Test",
  },
];
