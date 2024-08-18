import { TransformingCard } from "@/components/basecomponents/cards";

const Transforming: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 bg-white 2xl:w-[70vw] xl:w-[80vw] lg:w-[90vw] w-full px-2 py-5">
      <p className="text-2xl font-normal text-gray-800 text-center md:text-left">
        Transformando <b className="text-orange-500">vidas e histórias!</b>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <TransformingCard
          key={1}
          star={5}
          image="https://images.pexels.com/photos/3781789/pexels-photo-3781789.jpeg?auto=compress&cs=tinysrgb&w=600"
          text={"“Eu queria tirar minha filha da rede pública porque a educação é péssima, mas não consegui pagar todo o custo de uma escola particular, consegui 30% em uma escola perto da minha casa”"}
          name="Camila"
        />
        <TransformingCard
          key={2}
          star={5}
          image="https://images.pexels.com/photos/3781789/pexels-photo-3781789.jpeg?auto=compress&cs=tinysrgb&w=600"
          text={"Minha experiência tem sido excelente porque meu filho está recebendo uma educação de qualidade a um preço que posso pagar graças à Best School. Obrigado"}
          name="Alejandro da Silva"
        />
        <TransformingCard
          key={3}
          star={5}
          image="https://images.pexels.com/photos/3781789/pexels-photo-3781789.jpeg?auto=compress&cs=tinysrgb&w=600"
          text={"Falei com dois atendentes, ambos foram muito atenciosos, tiraram minhas dúvidas, me tranquilizaram e me deram todo suporte para que desse certo"}
          name="Luciana Lacerda"
        />
        <TransformingCard
          key={4}
          star={5}
          image=""
          text={"“A Melhor Escola me ajudou muito! Consegui bolsa para meus filhos e estou muito satisfeito com a instituição de ensino”"}
          name="Lorilei Rodrigues"
        />
      </div>
    </div>
  );
};

export default Transforming;
