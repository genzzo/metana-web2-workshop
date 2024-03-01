type Props = {
  showLine?: boolean;
};

const EyeIcon = ({ showLine }: Props) => {
  return (
    <span className="relative block">
      <svg
        width="24"
        height="24"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Password eye icon</title>
        <path
          d="M21.8602 10.5721C21.6636 10.3032 16.9808 3.98901 10.9999 3.98901C5.01902 3.98901 0.33593 10.3032 0.139606 10.5718C-0.0465352 10.8269 -0.0465352 11.1728 0.139606 11.4279C0.33593 11.6968 5.01902 18.011 10.9999 18.011C16.9808 18.011 21.6636 11.6967 21.8602 11.4281C22.0466 11.1731 22.0466 10.8269 21.8602 10.5721ZM10.9999 16.5604C6.59434 16.5604 2.77867 12.3696 1.64914 10.9995C2.7772 9.62824 6.58489 5.43956 10.9999 5.43956C15.4052 5.43956 19.2206 9.6297 20.3506 11.0005C19.2226 12.3717 15.4149 16.5604 10.9999 16.5604Z"
          fill="currentColor"
        />
        <path
          d="M10.9999 6.64844C8.60043 6.64844 6.64822 8.60064 6.64822 11.0001C6.64822 13.3996 8.60043 15.3518 10.9999 15.3518C13.3994 15.3518 15.3516 13.3996 15.3516 11.0001C15.3516 8.60064 13.3994 6.64844 10.9999 6.64844ZM10.9999 13.9012C9.40016 13.9012 8.09881 12.5998 8.09881 11.0001C8.09881 9.40042 9.40021 8.09902 10.9999 8.09902C12.5996 8.09902 13.901 9.40042 13.901 11.0001C13.901 12.5998 12.5996 13.9012 10.9999 13.9012Z"
          fill="currentColor"
        />
      </svg>
      <span
        className={`absolute top-1/2 h-0.5 w-6 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current transition-all ${
          showLine ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </span>
  );
};

export default EyeIcon;