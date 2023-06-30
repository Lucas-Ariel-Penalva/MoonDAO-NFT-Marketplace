import Link from "next/link";
import { NETWORK } from "../../const/config";

export default function PolygonBridge({ linked }: any) {
  return (
    <div>
      <button
        onClick={() =>
          window.open(
            "https://wallet.polygon.technology/polygon/bridge/deposit"
          )
        }
        className="bridge-button"
      >
        {`${NETWORK.name} Bridge`}
      </button>
      {linked && (
        <>
          <h1 className="text-center md:text-left text-[80%] opacity-70 leading-6 pr-2 pt-3">
            {`The marketplace uses L2 MOONEY, use the bridge to transfer L1
        MOONEY (${NETWORK.name === "Mumbai" ? "Goerli" : "Mainnet"}) to L2 (${
              NETWORK.name
            })`}
            <Link className="ml-2 font-bold text-moon-gold" href={"/bridge"}>
              Learn more →
            </Link>
          </h1>
        </>
      )}
    </div>
  );
}
