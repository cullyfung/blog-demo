interface CardProps {
  title: string;
  image: string;
}

const Card = ({ title, image }: CardProps) => {
  return (
    <div className="w-80% mx-auto my12">
      <h3 className="text-4xl text-center font-bold">{title}</h3>
      <div className="w-full rounded overflow-hidden">
        <img
          src={image}
          alt="cover"
          className="h-100vh overflow-hidden w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Card;
