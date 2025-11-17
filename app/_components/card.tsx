const Card = () => {
  return (
    <div className="mt-20">
      <div className="bg-white shadow-lg w-[1261px] h-[491px] mx-auto ">
        <div className="flex flex-col">
          <h2>Amandine Kaneza</h2>
          <div className="flex gap-5">
            <span>8 years old in Kigali</span>
            <span>Kigali</span>
            <span>Survivor</span>
          </div>
          <p>
            Looking for my sister Maria who was 8 years old in 1994. We were
            separated in Nyamata. She had a small scar on the left hand
          </p>
          <ol>
            Memories
            <li>We lived near the church</li>
            <li>She loved to sing</li>
            <li>Our father was a teacher</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Card;
