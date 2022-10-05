import type { APIContext } from 'astro';

// File routes export a get() function, which gets called to generate the file.
// Return an object with `body` to save the file contents in your final build.
// If you export a post() function, you can catch post requests, and respond accordingly
export async function post({ request }: APIContext) {
  const data = await request.formData();
  console.log(data.get('name'));
  return {
    body: JSON.stringify({
      name: data.get('name'),
    }),
  };
}
