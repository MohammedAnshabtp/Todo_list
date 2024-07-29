import {render,screen,fireEvent,waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';


test('loads and display todos',async()=>{
    render(<TodoList/>);
    expect(await screen.findByText('Google Pixel 6 Pro')).toBeInTheDocument();
    expect(await screen.findByText('Learn MSW')).toBeInTheDocument();
});

test('adds a new todo', async() =>{
    render(<TodoList/>);

    fireEvent.change(screen.getByLabelText(/name/i),{
       target:{value:"Learn Vitest"}, 
    });
    fireEvent.change(screen.getByLabelText(/description/i), {
        target: { value: 'Description of New Object' },
      });
    fireEvent.click(screen.getByRole('button',{ name: /submit/i}));
    expect (await screen.findByText('Learn Vitest')).toBeInTheDocument();
});