export default async function PetInfoFunction({uuid}) {
  const result = await fetch(`${process.env.API_URL}/user/info/pet`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: process.env.AUTH_KEY,
    },
    body: JSON.stringify({
      uuid: uuid,
    }),
  });

  const res = await result.json();

  return res;
}
