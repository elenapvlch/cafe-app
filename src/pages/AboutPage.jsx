import TiramisuImg from "../assets/img_1.jpg";

export default function AboutPage() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={TiramisuImg} alt="dessert" style={{ maxWidth: "280px" }} />
        <img src={TiramisuImg} alt="dessert" style={{ maxWidth: "280px" }} />
        <img src={TiramisuImg} alt="dessert" style={{ maxWidth: "280px" }} />
      </div>

      <p style={{ margin: "10px", fontSize: "20px" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since 1966, when designers at Letraset and James Mosley, the librarian
        at St Bride Printing Library in London, took a 1914 Cicero translation
        and scrambled it to make dummy text fo
      </p>
    </div>
  );
}
