import Link from 'next/dist/client/link';
import { Plus } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/layout/page-header';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { SectionHeader } from '@/components/layout/section-header';
import { createClient } from '@/lib/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { StatCard } from '@/components/common/stat-card';

export default function DashboardPage() {
  const supabase = createClient();

  // const [events, stats] = await Promise.all([getHostEvents(supabase), getHostStats(supabase)])
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col gap-8">
      <div className="flex h-40 p-4">
        <PageHeader title="Dashboard" description="Nenhum evento criado ainda" />
      </div>

      <div className="flex justify-between gap-4 items-center">
        <StatCard label="Eventos" value={1} sub="1 passado" className="flex-1" />

        <StatCard label="Convidados" value={1} sub="total histórico" className="flex-1" />

        <StatCard label="Confirmações" value={1} sub="taxa média" className="flex-1" />

      </div>

      <SectionHeader
        title="Meus churrascos"
        action={
          <Button asChild className="rounded-lg">
            <Link href="/">
              <Plus className="h-4 w-4 mr-2" />
              Novo <span className="hidden md:inline">churrasco</span>
            </Link>
          </Button>
        }
      />

      {/* <div> */}
      {/* <div>
                <Image src="/mascot.png" alt="Logo" fill sizes="128px" className="object-contain opacity-80"/>
            </div> */}
      {/* <div>
            <p className='text-lg font-medium'>Cadê o churrasco, Rainha?</p>
            <p className='text-muted-foreground text-sm'>Crie seu primeiro evento e compartilhe o link com as amigas.</p>
        </div>
        <Button asChild>
            <Link href="/">
                <Plus className='h-4 w-4'/>
                Criar primeiro churrasco
            </Link>
        </Button>
        </div> */}

      <Card className="w-full md:w-1/3 p-0 gap-0">
        <div>
          <CardHeader className="p-4 bg-primary-foreground rounded-t-xl flex flex-row items-center justify-between">
            <Badge>data</Badge>
            <div>opcões</div>
          </CardHeader>

          <CardContent className="flex flex-col gap-1 my-4">
            <p className="text-base font-semibold">nome do churrasco</p>
            <p className="text-sm text-muted-foreground">descrição</p>
            <div className="flex flex-col gap-1 mt-1">
              <p className="text-xs text-muted-foreground">confirmado</p>
              {/* <Progress className='h-1' value=2 /> */}
            </div>
          </CardContent>

          <Separator />

          <CardFooter className="flex justify-between p-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="#"></Link>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </main>
  );
}
