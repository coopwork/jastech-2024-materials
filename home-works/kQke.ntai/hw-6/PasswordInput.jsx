import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="relative w-full max-w-sm">
            <input 
                type={visible ? "text" : "password"} 
                className="w-full px-4 py-2 border rounded-lg" 
                placeholder="Enter your password" 
            />
            <button 
                type="button" 
                className="absolute inset-y-0 right-3 flex items-center" 
                onClick={() => setVisible(!visible)}
            >
                {visible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
    );
};

export default PasswordInput;
