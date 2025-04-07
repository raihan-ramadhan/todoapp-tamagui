'use client';

import { HomeScreen } from 'app/features/home/screen';
import { CompletedScreen } from 'app/features/completed/screen';

export default function HomePage() {
  return (
    <div>
      <HomeScreen pagesMode={false} />
      <CompletedScreen pagesMode={false} />
    </div>
  );
}
