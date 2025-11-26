import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";

interface Teacher {
  id: number;
  full_name: string;
  image: string;
  phone: string;
  pasport: string;
  groups: string[];
  email: string;
  login: string;
  status: string;
}

// Define the table data using the interface
const tableData: Teacher[] = [
  {
    id: 1,
    full_name: "Lindsey Curtis",
    image: "/images/user/user-17.jpg",
    phone: "+1 202 555 0188",
    pasport: "AB1234567",
    groups: ["Web Design", "UI/UX"],
    email: "LindseyCurtis@gmail.com",
    login: "lindsey.curtis",
    status: "Active",
  },
  {
    id: 2,
    full_name: "Kaiya George",
    image: "/images/user/user-18.jpg",
    phone: "+1 202 555 0144",
    pasport: "AC9876543",
    groups: ["Project Management"],
    email: "KaiyaGeorge@gmail.com",
    login: "kaiya.george",
    status: "Active",
  },
  {
    id: 3,
    full_name: "Zain Geidt",
    image: "/images/user/user-17.jpg",
    phone: "+1 202 555 0166",
    pasport: "AA1122334",
    groups: ["Content Writing"],
    email: "ZainGeidt@gmail.com",
    login: "zain.geidt",
    status: "Active",
  },
  {
    id: 4,
    full_name: "Abram Schleifer",
    image: "/images/user/user-20.jpg",
    phone: "+1 202 555 0119",
    pasport: "AB4433221",
    groups: ["Digital Marketing", "SMM"],
    email: "AbramSchleifer@gmail.com",
    login: "abram.schleifer",
    status: "Active",
  },
  {
    id: 5,
    full_name: "Carla George",
    image: "/images/user/user-21.jpg",
    phone: "+1 202 555 0199",
    pasport: "AD6677889",
    groups: ["Front-end Development"],
    email: "CarlaGeorge@gmail.com",
    login: "carla.george",
    status: "Active",
  },
];

export default function TeachersTable() {
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
                Teacher
              </TableCell>

              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Email
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
                Groups
              </TableCell>

              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Login
              </TableCell>

              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((teacher) => (
              <TableRow key={teacher.id}>
                {/* Avatar + Name */}
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={teacher.image}
                        alt={teacher.full_name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {teacher.full_name}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        Teacher
                      </span>
                    </div>
                  </div>
                </TableCell>

                {/* Email */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {teacher.email}
                </TableCell>

                {/* Phone */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {teacher.phone}
                </TableCell>

                {/* Passport */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {teacher.pasport}
                </TableCell>

                {/* Groups */}
                <TableCell className="px-4 py-3 text-start">
                  <div className="flex gap-2 flex-wrap">
                    {teacher.groups.map((group, idx) => (
                      <Badge key={idx} size="sm" color="primary">
                        {group}
                      </Badge>
                    ))}
                  </div>
                </TableCell>

                {/* Login */}
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {teacher.login}
                </TableCell>

                {/* Status */}
                <TableCell className="px-4 py-3 text-start">
                  <Badge
                    size="sm"
                    color={
                      teacher.status === "Active"
                        ? "success"
                        : teacher.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {teacher.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
