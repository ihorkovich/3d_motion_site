const EmailButton = () => {
  return (
    <button>
      <a
        href={import.meta.env.VITE_THEM_EMAIL_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm"
      >
        {import.meta.env.VITE_THEM_EMAIL.toUpperCase()}
      </a>
    </button>
  );
};

export default EmailButton;
