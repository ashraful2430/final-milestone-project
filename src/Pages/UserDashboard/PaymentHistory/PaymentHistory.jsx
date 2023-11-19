import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <>
      {payments.length === 0 ? (
        <>
          <p className="min-h-screen flex items-center justify-center text-3xl">
            You Have not make any purchased yet{" "}
          </p>
        </>
      ) : (
        <div>
          <h3 className="text-center text-3xl ">
            Total payments : {payments.length}
          </h3>

          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Email</th>
                    <th>Total Price</th>
                    <th>Transaction Id</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment, index) => (
                    <tr key={payment._id} className="hover">
                      <th>{index + 1}</th>
                      <td>{payment.email}</td>
                      <td>{payment.price}</td>
                      <td>{payment.transitionId}</td>
                      <td
                        className={
                          payment.status === "Pending"
                            ? "text-red-500"
                            : "text-green-500"
                        }
                      >
                        {payment.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentHistory;
