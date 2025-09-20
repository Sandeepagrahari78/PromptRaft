import Header from '../Header';

export default function HeaderExample() {
  return <Header onPromptingClick={() => console.log('Header prompting clicked')} />;
}