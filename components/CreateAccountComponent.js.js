import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

const CreateAccountComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex bg-white rounded-2xl shadow-lg w-[768px]">
        {/* Left Section */}
        <div className="w-1/2 bg-blue-500 text-white p-8 rounded-l-2xl">
          <h1 className="text-3xl font-bold mb-4">GetItDone</h1>
          <ul className="space-y-2">
            <li>Anonymity-first freelancing – real work, no names.</li>
            <li>Freelancers are ‘Agents,’ clients are ‘Users’ – each with a unique identity.</li>
            <li>Focus on skills, not identities.</li>
          </ul>
          <div className="mt-6 flex justify-center">
            <img src="/illustration.png" alt="Illustration" className="w-60" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-white p-8 rounded-r-2xl">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Create a new account</h2>
          <p className="mb-6 text-sm">Already have an account? <a href="#" className="text-blue-600">Sign in</a></p>

          <div className="space-y-4">
            <Button className="w-full flex items-center justify-center gap-2" variant="outline">
              <FcGoogle size={20} /> Continue with Google
            </Button>
            <Button className="w-full flex items-center justify-center gap-2" variant="outline">
              <MdEmail size={20} /> Continue with email
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-6">
            By joining, you agree to the GetItDone Terms of Service and consent to receiving occasional emails from us. 
            Please review our Privacy Policy to understand how we collect and use your personal data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountComponent;