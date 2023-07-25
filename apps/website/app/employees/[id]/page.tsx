type Props = {
  readonly params: {
    id: string;
  };
};

export default async function Page({ params: { id } }: Props) {
  return <div>id: {id}</div>;
}
