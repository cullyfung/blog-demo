import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import './App.css';
import request from './utils/request';

interface Post {
  id: string;
  title: string;
  views: number;
}

function App() {
  const queryClient = useQueryClient();

  const { isFetching, data } = useQuery({
    queryKey: ['post'],
    queryFn: (): Promise<Post[]> => request.get('/posts')
  });

  const { mutateAsync: createPostAsync } = useMutation({
    mutationKey: ['post-create'],
    mutationFn: (params: Post) => request.post('/posts', params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['post']
      });
    }
  });

  const create = () => {
    createPostAsync({
      id: Date.now() + '',
      title: 'New Post',
      views: 0
    });
  };

  const { mutateAsync: removePostAsync } = useMutation({
    mutationKey: ['post-delete'],
    mutationFn: (id: string) => request.delete(`/posts/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['post']
      });
    }
  });

  const remove = (id: string) => {
    removePostAsync(id);
  };

  return (
    <div className="grid place-items-center">
      <div className="w-500px">
        <h1 className="text-xl py-5 text-center">Posts</h1>
        <div className="flex justify-end w-full my-1">
          <button
            onClick={create}
            className="border px-4 py-1 rounded-md">
            New
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="w-10">ID</th>
              <th className="w-40">Title</th>
              <th className="w-20">Views</th>
              <th className="w-20">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {isFetching ? (
              <div className="flex items-center justify-center">Loading...</div>
            ) : (
              data?.map((item: Post) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.views}</td>
                    <td>
                      <button
                        onClick={() => remove(item.id)}
                        className="border px-4 py-1 rounded-md text-red-500 border-red-500">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
