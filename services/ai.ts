
export async function generateAI(
  type: string,
  topic: string
) {
  const response = await fetch(
    "http://localhost:4000/api/ai",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type,
        topic,
      }),
    }
  );

  return response.json();
}