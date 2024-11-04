import { useState } from "react";
import { LoginModal } from "../LoginModal";
import SignupModal from "../SignUpModal";

export function AuthButtons() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleSignupClick = () => {
    setIsSignupModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleCloseSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleSignupClick}
        className="bg-white text-colorMutedGray font-bold px-4 py-2 rounded-xl transition duration-300 ease-in-out hover:bg-gray-300"
        aria-label="Cadastrar nova conta"
      >
        Cadastrar
      </button>
      <button
        onClick={handleLoginClick}
        className="bg-darkGray text-white px-4 font-bold py-2 rounded-xl transition duration-300 ease-in-out hover:bg-gray-700"
        aria-label="Entrar na conta"
      >
        Entrar
      </button>

      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={handleCloseSignupModal}
      />
    </div>
  );
}
