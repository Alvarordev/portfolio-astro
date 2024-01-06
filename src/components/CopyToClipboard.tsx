import * as React from "react";

interface Props {
  className: string;
}

export const Mail = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-mail-open ${className}`}
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  );
};

export const Copy = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-files ${className}`}
    >
      <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
      <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
      <path d="M15 2v5h5" />
    </svg>
  );
};

export const Check = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-check ${className}`}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};

export const CopyToClipboard = () => {
  const email = "alvarord519@gmail.com";
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    const textarea = document.createElement("textarea");
    textarea.value = email;

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex items-center gap-2 pt-6 relative">
      <Mail className="h-5 w-5" />
      <p className="text-lg font-medium">{email}</p>
      <button
        onClick={copyToClipboard}
        className="hover:text-accent hover:saturate-150 transition-all"
      >
        <Copy className="h-5 w-5" />
      </button>

      {copied && (
        <div className="absolute -bottom-5 -right-16 text-primary font-medium text-sm pop flex gap-1 items-center">
          <Check className="h-4 w-4 text-green-600"/>
          Copiado!
        </div>
      )}
    </div>
  );
};
