import { Link } from "react-router-dom";

interface CardProbs {
  img: string;
  name: string;
  description: string;
  id: number;
  setSearch: (param: string) => void;
}

export const Card: React.FC<CardProbs> = ({
  img,
  name,
  description,
  id,
  setSearch,
}) => {
  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      onClick={() => setSearch("")}
    >
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={img} alt={name} />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
