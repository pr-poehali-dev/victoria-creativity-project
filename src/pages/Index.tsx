import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Виктория свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const kimonoItems = [
    { id: 1, title: 'Винтажное кимоно с цветочным принтом', price: 'По запросу', img: 'https://cdn.poehali.dev/projects/4dc70d72-6943-4645-b9b1-7f1eb83c11a3/files/139a7435-8658-4e7e-9d1e-0b61b0668bd3.jpg' },
    { id: 2, title: 'Шёлковое кимоно с традиционным узором', price: 'По запросу', img: 'https://cdn.poehali.dev/projects/4dc70d72-6943-4645-b9b1-7f1eb83c11a3/files/139a7435-8658-4e7e-9d1e-0b61b0668bd3.jpg' },
    { id: 3, title: 'Редкое винтажное кимоно из Киото', price: 'По запросу', img: 'https://cdn.poehali.dev/projects/4dc70d72-6943-4645-b9b1-7f1eb83c11a3/files/139a7435-8658-4e7e-9d1e-0b61b0668bd3.jpg' },
  ];

  const ceramicItems = [
    { id: 1, title: 'Керамическая чаша ручной работы', category: 'Посуда', img: 'https://cdn.poehali.dev/projects/4dc70d72-6943-4645-b9b1-7f1eb83c11a3/files/4c93184c-d824-499b-8868-1fd114d27fab.jpg' },
    { id: 2, title: 'Коты - керамические фигурки', category: 'Декор', img: 'https://cdn.poehali.dev/projects/4dc70d72-6943-4645-b9b1-7f1eb83c11a3/files/7a8bc561-d630-4c8f-b0b6-5200b5f74eb2.jpg' },
    { id: 3, title: 'Шаманская курительница', category: 'Атрибутика', img: 'https://cdn.poehali.dev/projects/4dc70d72-6943-4645-b9b1-7f1eb83c11a3/files/4c93184c-d824-499b-8868-1fd114d27fab.jpg' },
    { id: 4, title: 'Керамические вазы', category: 'Интерьер', img: 'https://cdn.poehali.dev/projects/4dc70d72-6943-4645-b9b1-7f1eb83c11a3/files/4c93184c-d824-499b-8868-1fd114d27fab.jpg' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-primary/20 to-accent/20 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <div className="mb-6 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              Винтажное кимоно • Керамика ручной работы 🐱
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              Виктория
            </h1>
            <p className="mb-8 text-xl text-white/90 md:text-2xl">
              Эксклюзивные винтажные кимоно из Японии и Европы
              <br />
              Уникальная керамика ручной работы
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2 bg-white text-secondary hover:bg-white/90">
                <Icon name="Send" size={20} />
                Написать в Telegram
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
                <Icon name="Eye" size={20} />
                Смотреть каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kimono Section */}
      <section id="kimono" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
              Винтажное кимоно
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Эксклюзивная коллекция винтажных кимоно, собранных на аукционах Японии и Европы. 
              Каждое изделие — уникальное произведение искусства с богатой историей.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {kimonoItems.map((item, idx) => (
              <Card key={item.id} className="group overflow-hidden transition-all hover:shadow-xl animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mb-4 text-primary font-medium">{item.price}</p>
                  <Button className="w-full gap-2">
                    <Icon name="MessageCircle" size={18} />
                    Узнать подробнее
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="mb-3 text-2xl font-bold">Новые поступления каждую неделю</h3>
                <p className="text-muted-foreground">
                  Подписывайтесь на Telegram-канал, чтобы первыми узнавать о новых винтажных кимоно, 
                  украшениях и аксессуарах из Японии и Европы.
                </p>
              </div>
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                <Icon name="Send" size={20} />
                Telegram канал
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
              Видео о кимоно
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Смотрите видеообзоры коллекции, истории создания и особенности каждого изделия
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative aspect-video overflow-hidden rounded-xl bg-muted cursor-pointer transition-transform hover:scale-105">
                <div className="flex h-full items-center justify-center">
                  <div className="rounded-full bg-white/90 p-6 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon name="Play" size={32} />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-sm font-medium text-white">Видео #{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceramic Section */}
      <section id="ceramic" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center animate-fade-in">
            <div className="mb-4 text-6xl">🐱</div>
            <h2 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
              Керамика ручной работы
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Уникальные предметы интерьера, шаманская атрибутика, посуда и декор. 
              Каждое изделие создаётся вручную с душой и любовью к котам 🐾
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ceramicItems.map((item, idx) => (
              <Card key={item.id} className="group overflow-hidden transition-all hover:shadow-xl animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute right-3 top-3">
                    <span className="rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">{item.title}</h3>
                  <Button variant="outline" className="w-full gap-2">
                    <Icon name="MessageCircle" size={18} />
                    Заказать
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block p-8">
              <div className="mb-4 text-5xl">✨</div>
              <h3 className="mb-3 text-2xl font-bold">Работаю на заказ</h3>
              <p className="mb-6 max-w-md text-muted-foreground">
                Создаю уникальные керамические изделия по вашим пожеланиям: 
                чаши, вазы, тарелки, курительницы, лингамы и йони, фигурки котов
              </p>
              <Button className="gap-2">
                <Icon name="Sparkles" size={18} />
                Обсудить заказ
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
                Свяжитесь со мной
              </h2>
              <p className="text-lg text-muted-foreground">
                Напишите мне или подпишитесь на мои Telegram-каналы
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="p-8">
                <h3 className="mb-6 text-2xl font-bold">Отправить сообщение</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2">
                    <Icon name="Send" size={18} />
                    Отправить
                  </Button>
                </form>
              </Card>

              <div className="space-y-6">
                <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-xl">
                  <div className="bg-gradient-to-br from-primary to-primary/80 p-8 text-white">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                        <Icon name="ShoppingBag" size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">Виктория Винтаж</h4>
                        <p className="text-sm text-white/80">Кимоно • Украшения • Аксессуары</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full gap-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary">
                      <Icon name="Send" size={18} />
                      Открыть канал
                    </Button>
                  </div>
                </Card>

                <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-xl">
                  <div className="bg-gradient-to-br from-accent to-accent/80 p-8 text-white">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                        <div className="text-3xl">🐱</div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">Виктория Керамика Коты</h4>
                        <p className="text-sm text-white/80">Керамика ручной работы</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full gap-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-accent">
                      <Icon name="Send" size={18} />
                      Открыть канал
                    </Button>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon name="Bell" size={24} className="text-primary" />
                    <h4 className="font-semibold">Новости и анонсы</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Следите за новыми поступлениями винтажных кимоно, 
                    эксклюзивными керамическими работами и специальными предложениями 
                    в моих Telegram-каналах!
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-secondary py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-2xl font-bold">Виктория</h3>
              <p className="text-white/70">Винтажное кимоно • Керамика ручной работы 🐱</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>© 2024 Виктория. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
