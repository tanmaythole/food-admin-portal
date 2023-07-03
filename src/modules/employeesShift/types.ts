export type EmployeeShiftDetails = {
  name: string;
  role: string;
  image?: string;
  color: string;
  bgColor?: string;
  chipType?: "fill" | "outline";
}
export type EmployeeShiftResponse = {
  title: string;
  data: EmployeeShiftDetails[];
}[];