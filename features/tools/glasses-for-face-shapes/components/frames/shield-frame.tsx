import type { SVGProps } from "react"

export const ShieldFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 62 26"
    fill="none"
    {...props}
    stroke="none"
  >
    {/* lado izquierdo */}
    <path
      stroke="currentColor"
      fill="none"
      strokeWidth="1"
      d="M30.693 1.2c-.935-.022-2.648 0-5.612.03-5.436.084-13.404.36-16.76 1.266-1.142.302-2.145.902-3.19 1.538-.692.429-1.51 1.042-1.863 1.62-.925 1.551-.653 3.093-.77 5.206-.045 2.531-.039 6.079-.026 8.409.03.419-.048.844.065.993.091.169.205.296.364.432 1.285.957 3.103 1.405 4.742 1.775 2.265.477 4.511.766 6.786 1.178 3.252.585 8.18 1.652 9.555-.11 1.315-1.428 2.263-3.703 3.353-5.53.47-.844.906-1.604 1.276-2.188.584-1.039 1.19-1.37 2.255-1.45"
    />

    {/* lado derecho */}
    <path
      stroke="currentColor"
            fill="none"
      strokeWidth="1"
      d="M30.695 1.2c.934-.022 2.648 0 5.611.03 5.437.084 13.405.36 16.76 1.266 1.143.302 2.146.902 3.191 1.538.692.429 1.51 1.042 1.863 1.62.925 1.551.653 3.093.77 5.206.045 2.531.038 6.079.026 8.409-.03.419.048.844-.065.993-.091.169-.205.296-.364.432-1.285.957-3.103 1.405-4.742 1.775-2.265.477-4.511.766-6.786 1.178-3.253.585-8.18 1.652-9.556-.11-1.314-1.428-2.262-3.703-3.352-5.53a48 48 0 0 0-1.276-2.188c-.584-1.039-1.19-1.37-2.255-1.45"
    />

    {/* laterales */}
    <path
      stroke="currentColor"
      
      strokeWidth="1.6"
      strokeLinecap="square"
      d="M1.81 8.691v3.006"
    />
    <path
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
      d="M59.576 8.691v3.006"
    />

    {/* centro */}
    <path
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      d="M30.821 13.838c-1.49.821-2.938 2.733-3.96 4.258"
    />
    <path
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      d="M30.18 13.838c1.49.821 2.938 2.733 3.96 4.258"
    />
  </svg>
)