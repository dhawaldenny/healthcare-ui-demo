import React, { useContext } from "react";
import { dataContext } from "@/app/page";

const DiagnosisList = () => {
  const { currentUserData } = useContext(dataContext);

  return (
    <div className="h-full w-full bg-white rounded-xl p-4 flex flex-col gap-5 ">
      <div className="font-bold text-2xl">Diagnosis List</div>
      <div className="overflow-hidden border rounded-lg border-gray-300">
        <div className="max-h-52 overflow-y-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                >
                  Problem/Diagnosis
                </th>
                <th
                  scope="col"
                  className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUserData.diagnostic_list.map((item:any, index:number) => (
                <tr key={index}>
                  <td className="p-2 text-sm leading-6 text-gray-900 capitalize">
                    {item.name}
                  </td>
                  <td className="p-2 text-sm leading-6 text-gray-900">
                    {item.description}
                  </td>
                  <td className="p-2 text-sm leading-6 text-gray-900">
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisList;
