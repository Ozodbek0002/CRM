import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";

interface Student {
  id: number;
  full_name: string;
  image: string;
  phone: string;
  pasport: string;
  group_id: string | number;
  login: string;
  password: string;
}

// Define the table data using the interface
const tableData: Student[] = [
  {
    id: 1,
    full_name: "Lindsey Curtis",
    image: "/images/user/user-17.jpg",
    phone: "+1 202 555 0188",
    pasport: "AB1234567",
    group_id: "G-12",
    login: "lindsey.curtis",
    password: "student123",
  },
  {
    id: 2,
    full_name: "Kaiya George",
    image: "/images/user/user-18.jpg",
    phone: "+1 202 555 0144",
    pasport: "AC9876543",
    group_id: "G-9",
    login: "kaiya.george",
    password: "student123",
  },
  {
    id: 3,
    full_name: "Zain Geidt",
    image: "/images/user/user-17.jpg",
    phone: "+1 202 555 0166",
    pasport: "AA1122334",
    group_id: "G-11",
    login: "zain.geidt",
    password: "student123",
  },
  {
    id: 4,
    full_name: "Abram Schleifer",
    image: "/images/user/user-20.jpg",
    phone: "+1 202 555 0119",
    pasport: "AB4433221",
    group_id: "G-7",
    login: "abram.schleifer",
    password: "student123",
  },
  {
    id: 5,
    full_name: "Carla George",
    image: "/images/user/user-21.jpg",
    phone: "+1 202 555 0199",
    pasport: "AD6677889",
    group_id: "G-10",
    login: "carla.george",
    password: "student123",
  },
];

export default function StudentsTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Student
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Phone
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Passport
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Group ID
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Login
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={student.image}
                        alt={student.full_name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {student.full_name}
                      </span>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {student.phone}
                </TableCell>

                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {student.pasport}
                </TableCell>

                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {student.group_id}
                </TableCell>

                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {student.login}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
