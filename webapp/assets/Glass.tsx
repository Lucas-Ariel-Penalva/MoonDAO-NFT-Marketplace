// If size isn't passed, defaults to the size of how the glass looks on the mobile navbar.

interface Glass {
  size?: {
    height: number;
    width: number;
  };
}

const Glass = ({ size }: Glass) => (
  <svg className="" xmlns="http://www.w3.org/2000/svg" width={`${!size ? 16 : size.width}`} height={`${!size ? 16 : size.height}`} viewBox="0 0 21 21" fill="none">
    <path
      fill="#fff"
      d="M8.648 1.464a6.842 6.842 0 0 1 6.719 8.176A6.844 6.844 0 0 1 1.81 8.309a6.876 6.876 0 0 1 6.837-6.845Zm0-1.281A8.124 8.124 0 0 0 .68 9.893a8.126 8.126 0 0 0 11.077 5.923A8.125 8.125 0 0 0 8.648.183ZM20.317 19.116l-4.606-4.638-.888.881 4.606 4.638a.625.625 0 1 0 .888-.88Z"
    />
  </svg>
);
export default Glass;
