import { FaCommentDots } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

interface CommentSliderProps {
  isOpen: boolean;
  toggleSlider: () => void;
}

const CommentSlider: React.FC<CommentSliderProps> = ({ isOpen, toggleSlider }) => {
  return (
    <div>
      <button
        onClick={toggleSlider}
        className="fixed top-4 right-4 z-50 p-2 bg-[#2563EB] text-white rounded-full shadow-lg md:hidden"
      >
        <AiOutlineMenu size={24} />
      </button>

      <aside
        className={`fixed top-0 right-0 bg-[#FFFFFF] text-black transition-all duration-300 z-40 ${
          isOpen || window.innerWidth >= 768 ? "w-64" : "w-0"
        } flex flex-col h-full border-l border-gray-200 overflow-hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <FaCommentDots size={24} className="text-[#2563EB]" />
            {(isOpen || window.innerWidth >= 768) && (
              <span className="ml-3 text-lg font-semibold">Comments</span>
            )}
          </div>
          <button
            onClick={toggleSlider}
            className="text-gray-500 hover:text-gray-800 transition md:hidden"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="bg-gray-50 p-3 rounded shadow-sm border border-gray-200">
            <p className="text-sm text-gray-700">
              <strong>User:</strong> This is a comment.
            </p>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full bg-[#2563EB] text-white p-2 rounded hover:bg-[#1E40AF] transition duration-200">
            Add Comment
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CommentSlider;
