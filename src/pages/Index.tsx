import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Виктория свяжется с вами в ближайшее время",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const ceramicPlaceholders = [
    { id: 1, title: "Керамическая чаша", category: "Посуда", emoji: "🐾👁️" },
    { id: 2, title: "Коты", category: "Декор", emoji: "😺👁️" },
    { id: 3, title: "Курительница", category: "Атрибутика", emoji: "👁️🐾" },
    { id: 4, title: "Вазы", category: "Интерьер", emoji: "🐾😺" },
    { id: 5, title: "Тарелки", category: "Посуда", emoji: "😸👁️" },
    { id: 6, title: "Фигурки котов", category: "Декор", emoji: "🐱🐾" },
    { id: 7, title: "Лингамы и Йони", category: "Атрибутика", emoji: "👁️😺" },
    { id: 8, title: "Керамика на заказ", category: "Индивидуально", emoji: "🐾🐱" },
  ];

  const kimonoImages = [
    { id: 1, url: "https://cdn.poehali.dev/files/884715c3-f32f-4b8e-9691-060aec74f7cb.jpg", title: "Розовое кимоно", emoji: "👁️" },
    { id: 2, url: "https://cdn.poehali.dev/files/f7a66f39-ce33-463a-a9ca-3b074e77e145.jpg", title: "Золотое кимоно", emoji: "🐾" },
    { id: 3, url: "https://cdn.poehali.dev/files/904e9546-3bed-4571-83c0-94f167df9628.jpg", title: "Цветочное кимоно", emoji: "😺" },
    { id: 4, url: "https://cdn.poehali.dev/files/4cca17a4-2ed9-44ea-9b83-e9cdf845c1a1.jpg", title: "Золотое кимоно с подругой", emoji: "👁️" },
    { id: 5, url: "https://cdn.poehali.dev/files/21584c70-4d33-40fa-a069-fbfa69786bc1.jpg", title: "Розово-серое кимоно", emoji: "🐾" },
    { id: 6, url: "https://cdn.poehali.dev/files/884715c3-f32f-4b8e-9691-060aec74f7cb.jpg", title: "Коллекционное кимоно", emoji: "😺" },
  ];

  const videoLinks = [
    {
      id: 1,
      url: "https://t.me/c/2913140693/64",
      title: "Коллекция винтажных кимоно",
      description: "Обзор эксклюзивных кимоно из Японии и Европы",
    },
    {
      id: 2,
      url: "https://t.me/c/2913140693/51",
      title: "Как носить кимоно модно",
      description: "Стилизация кимоно в современных образах",
    },
    {
      id: 3,
      url: "https://t.me/c/2913140693/40",
      title: "Керамика ручной работы",
      description: "Процесс создания уникальных изделий с котами",
    },
  ];

  const getVideoId = (url: string) => {
    if (!url) return null;
    const youtubeMatch = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,
    );
    if (youtubeMatch) return { type: "youtube", id: youtubeMatch[1] };

    const telegramMatch = url.match(/t\.me\/([^\/]+)\/(\d+)/);
    if (telegramMatch)
      return {
        type: "telegram",
        channel: telegramMatch[1],
        id: telegramMatch[2],
      };

    return null;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-black opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(201, 169, 97, 0.05) 0%, transparent 50%)",
          }}
        />

        <div className="container relative mx-auto px-4 py-20 text-center animate-fade-in">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center justify-center">
              <img 
                src="https://cdn.poehali.dev/files/c6ff79de-2fd1-4c84-b482-ffde246ff591.jpg" 
                alt="Логотип Виктори" 
                className="h-48 w-auto md:h-64 object-contain drop-shadow-2xl"
              />
            </div>
            <h1 className="mb-8 text-7xl font-bold tracking-tight text-primary md:text-9xl">
              Виктори
            </h1>
            <div className="mb-8 space-y-4 text-xl text-foreground/90 md:text-2xl">
              <p className="font-light italic">
                Человек с безупречным чувством вкуса
              </p>
              <p className="text-lg text-foreground/70">
                Винтажные коллекционные кимоно из Японии и Европы
                <br />
                Уникальная керамика ручной работы
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="gap-2 border-primary bg-primary text-black hover:bg-primary/90"
                asChild
              >
                <a href="https://t.me/viktenvv" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} />
                  Telegram
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
              >
                <Icon name="Instagram" size={20} />
                Instagram
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary/50" />
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12 text-center animate-fade-in">
            <div className="inline-block rounded-full border-2 border-primary/30 px-6 py-2 text-sm font-medium text-primary">
              Стилист по кимоно
            </div>

            <h2 className="text-5xl font-bold text-primary md:text-6xl">
              Научу носить кимоно модно
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p className="text-2xl font-light text-primary/90">
                Виктория — это человек с безупречным чувством вкуса, который
                научит вас носить коллекционные кимоно в повседневной жизни.
              </p>
              <p>
                Каждое кимоно в моей коллекции тщательно отобрано на аукционах
                Японии и Европы. Это не просто одежда — это произведения
                искусства с богатой историей, которые можно носить каждый день,
                создавая уникальные образы.
              </p>
              <p>
                Я помогу вам подобрать идеальное винтажное кимоно и покажу, как
                интегрировать его в современный гардероб, сохраняя элегантность
                и стиль.
              </p>
            </div>

            <div className="grid gap-6 pt-12 md:grid-cols-3">
              <Card className="border-primary/20 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <div className="mb-4 flex items-center justify-center gap-3 text-4xl">
                  <span>👘</span>
                  <span>👁️</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-primary">
                  Винтажные кимоно
                </h3>
                <p className="text-sm text-foreground/70">
                  Эксклюзивная коллекция аутентичных японских и европейских
                  кимоно
                </p>
              </Card>
              <Card className="border-primary/20 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <div className="mb-4 flex items-center justify-center gap-3 text-4xl">
                  <span>✨</span>
                  <span>🐾</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-primary">
                  Стилизация
                </h3>
                <p className="text-sm text-foreground/70">
                  Индивидуальный подход к созданию современных образов с кимоно
                </p>
              </Card>
              <Card className="border-primary/20 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <div className="mb-4 flex items-center justify-center gap-3 text-4xl">
                  <span>🐱</span>
                  <span>😺</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-primary">
                  Керамика
                </h3>
                <p className="text-sm text-foreground/70">
                  Уникальные изделия ручной работы с душой и любовью к котам
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Kimono Gallery */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-3 text-6xl">
              <span>👘</span>
              <span>👁️</span>
              <span>🐾</span>
              <span>😺</span>
            </div>
            <h2 className="mb-6 text-5xl font-bold text-primary md:text-6xl">
              Коллекционные кимоно
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70">
              Каждое кимоно — это история, рассказанная через шелк и
              традиционные узоры
            </p>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {kimonoImages.map((item, idx) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-primary/20 bg-card/30 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 animate-scale-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-black">
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute right-3 top-3 flex gap-2">
                    <div className="text-4xl drop-shadow-lg">{item.emoji}</div>
                    <div className="text-4xl drop-shadow-lg">👁️</div>
                  </div>
                  <div className="absolute left-3 top-3 flex gap-2">
                    <div className="text-4xl drop-shadow-lg">🐾</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="text-2xl">👁️</span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mb-4 text-sm text-primary">По запросу</p>
                  <Button
                    className="w-full gap-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-black"
                    variant="outline"
                  >
                    <Icon name="MessageCircle" size={18} />
                    Узнать подробнее
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-12 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <div className="flex-1">
                <h3 className="mb-4 text-3xl font-bold text-primary">
                  Новые поступления еженедельно
                </h3>
                <p className="text-foreground/70">
                  Подписывайтесь на Telegram-канал, чтобы первыми узнавать о
                  новых винтажных кимоно, украшениях и аксессуарах. Консультации
                  по стилизации и подбору образов.
                </p>
              </div>
              <Button
                size="lg"
                className="gap-2 bg-primary text-black hover:bg-primary/90"
              >
                <Icon name="Send" size={20} />
                Telegram канал
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Ceramic Gallery */}
      <section className="py-32 bg-gradient-to-b from-background to-black">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-8 flex items-center justify-center">
              <img 
                src="https://cdn.poehali.dev/files/82242942-c57f-4bbb-96cc-4b4d0cfef384.jpg" 
                alt="Виктори Керамика" 
                className="h-32 w-auto md:h-48 object-contain drop-shadow-2xl"
              />
            </div>
            <div className="mb-4 inline-flex items-center gap-3 text-7xl">
              <span>🐱</span>
              <span>👁️</span>
              <span>🐾</span>
              <span>😺</span>
              <span>👁️</span>
            </div>
            <h2 className="mb-6 text-5xl font-bold text-primary md:text-6xl">
              Керамика ручной работы
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70">
              Каждое изделие создаётся вручную с душой и любовью к котам
            </p>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {ceramicPlaceholders.map((item, idx) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-primary/20 bg-card/30 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 animate-scale-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="relative aspect-square overflow-hidden bg-muted/30">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mb-3 text-5xl">{item.emoji}</div>
                      <Icon
                        name="Image"
                        size={48}
                        className="mx-auto mb-3 text-primary/30"
                      />
                      <p className="text-xs text-foreground/50">
                        Загрузите фото
                      </p>
                    </div>
                  </div>
                  <div className="absolute right-3 top-3">
                    <span className="rounded-full border border-primary/30 bg-black/60 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute left-3 top-3">
                    <div className="text-3xl">{item.emoji}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-xl">{item.emoji}</span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full gap-2 border-primary/50 text-primary hover:bg-primary hover:text-black"
                  >
                    <Icon name="MessageCircle" size={18} />
                    Заказать
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="inline-block border-primary/30 bg-card/50 p-12 backdrop-blur-sm">
              <div className="mb-6 text-6xl">✨</div>
              <h3 className="mb-4 text-3xl font-bold text-primary">
                Работаю на заказ
              </h3>
              <p className="mb-8 max-w-lg text-foreground/70">
                Создаю уникальные керамические изделия по вашим пожеланиям:
                чаши, вазы, тарелки, курительницы, лингамы и йони, фигурки котов
              </p>
              <Button
                size="lg"
                className="gap-2 bg-primary text-black hover:bg-primary/90"
              >
                <Icon name="Sparkles" size={18} />
                Обсудить заказ
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block text-6xl">🎥</div>
            <h2 className="mb-6 text-5xl font-bold text-primary md:text-6xl">
              Видео о кимоно
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70">
              Обзоры коллекции, истории создания и особенности каждого изделия
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videoLinks.map((video, idx) => {
              const videoData = getVideoId(video.url);
              return (
                <Card
                  key={video.id}
                  className="group overflow-hidden border-primary/20 bg-card/30 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 animate-scale-in"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    {videoData?.type === "youtube" ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoData.id}`}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : videoData?.type === "telegram" ? (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-4 transition-transform hover:scale-110"
                        >
                          <div className="rounded-full bg-primary/20 p-6">
                            <Icon
                              name="Send"
                              size={40}
                              className="text-primary"
                            />
                          </div>
                          <span className="text-sm font-medium text-primary">
                            Смотреть в Telegram
                          </span>
                        </a>
                      </div>
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <div className="text-center">
                          <Icon
                            name="Video"
                            size={64}
                            className="mx-auto mb-4 text-primary/30"
                          />
                          <p className="text-sm text-foreground/50">
                            Добавьте ссылку на видео
                          </p>
                          <p className="mt-2 text-xs text-foreground/40">
                            YouTube или Telegram
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {video.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {video.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-8 backdrop-blur-sm md:p-12">
            <div className="text-center">
              <Icon
                name="Info"
                size={48}
                className="mx-auto mb-6 text-primary"
              />
              <h3 className="mb-4 text-2xl font-bold text-primary">
                Как добавить свои видео
              </h3>
              <div className="mx-auto max-w-2xl space-y-4 text-left text-foreground/70">
                <div className="flex gap-3">
                  <div className="shrink-0 text-primary">1.</div>
                  <p>
                    Загрузите видео на{" "}
                    <strong className="text-primary">YouTube</strong> или
                    опубликуйте в своём{" "}
                    <strong className="text-primary">Telegram-канале</strong>
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 text-primary">2.</div>
                  <p>
                    Скопируйте ссылку на видео (например:{" "}
                    <code className="rounded bg-black/30 px-2 py-1 text-xs">
                      youtube.com/watch?v=...
                    </code>{" "}
                    или{" "}
                    <code className="rounded bg-black/30 px-2 py-1 text-xs">
                      t.me/канал/123
                    </code>
                    )
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 text-primary">3.</div>
                  <p>
                    В редакторе найдите строку с{" "}
                    <code className="rounded bg-black/30 px-2 py-1 text-xs">
                      url: ''
                    </code>{" "}
                    в массиве videoLinks и вставьте вашу ссылку
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-32 bg-gradient-to-b from-background to-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <Icon
                name="HelpCircle"
                size={48}
                className="mx-auto mb-4 text-primary"
              />
              <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
                Как загрузить фотографии
              </h2>
            </div>

            <Card className="border-primary/30 bg-card/50 p-8 backdrop-blur-sm md:p-12">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-xl font-bold text-primary">
                    1
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      Откройте редактор
                    </h3>
                    <p className="text-foreground/70">
                      В редакторе poehali.dev наведите курсор на изображение с
                      иконкой Image и нажмите на него
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-xl font-bold text-primary">
                    2
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      Загрузите фото
                    </h3>
                    <p className="text-foreground/70">
                      Появится окно загрузки. Выберите ваши фотографии керамики
                      или кимоно с компьютера
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-xl font-bold text-primary">
                    3
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      Готово!
                    </h3>
                    <p className="text-foreground/70">
                      Фотографии автоматически заменят заглушки. Вы можете
                      загружать сколько угодно изображений
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                  <div className="flex gap-3">
                    <Icon
                      name="Lightbulb"
                      size={24}
                      className="shrink-0 text-primary"
                    />
                    <div>
                      <p className="font-semibold text-primary">Совет:</p>
                      <p className="text-sm text-foreground/70">
                        Для фото: используйте качественные изображения с хорошим
                        освещением.
                        <br />
                        Для видео: загрузите на YouTube или Telegram, затем
                        добавьте ссылку в код
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-background to-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-5xl font-bold text-primary md:text-6xl">
                Свяжитесь со мной
              </h2>
              <p className="text-lg text-foreground/70">
                Напишите или подпишитесь на мои каналы
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="border-primary/30 bg-card/50 p-8 backdrop-blur-sm">
                <h3 className="mb-6 text-2xl font-bold text-foreground">
                  Отправить сообщение
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="border-primary/30 bg-background/50"
                  />
                  <Input
                    placeholder="Телефон или Telegram"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="border-primary/30 bg-background/50"
                  />
                  <Textarea
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="border-primary/30 bg-background/50"
                  />
                  <Button
                    type="submit"
                    className="w-full gap-2 bg-primary text-black hover:bg-primary/90"
                  >
                    <Icon name="Send" size={18} />
                    Отправить
                  </Button>
                </form>
              </Card>

              <div className="space-y-6">
                <Card className="group cursor-pointer overflow-hidden border-primary/30 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="rounded-full border-2 border-primary/30 bg-black/40 p-4 backdrop-blur-sm">
                        <Icon
                          name="ShoppingBag"
                          size={28}
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground">
                          Виктори Винтаж
                        </h4>
                        <p className="text-sm text-foreground/60">
                          Кимоно • Украшения • Стиль
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-black"
                      asChild
                    >
                      <a href="https://t.me/+Rikgi84QYAA5MjMy" target="_blank" rel="noopener noreferrer">
                        <Icon name="Send" size={18} />
                        Открыть канал
                      </a>
                    </Button>
                  </div>
                </Card>

                <Card className="group cursor-pointer overflow-hidden border-primary/30 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  <div className="bg-gradient-to-br from-accent/20 to-accent/10 p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="rounded-full border-2 border-primary/30 bg-black/40 p-4 backdrop-blur-sm">
                        <div className="text-3xl">🐱</div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground">
                          Виктори Керамика и Коты
                        </h4>
                        <p className="text-sm text-foreground/60">
                          Авторская керамика
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-black"
                      asChild
                    >
                      <a href="https://t.me/+xV_lPPuG9t9iNDAy" target="_blank" rel="noopener noreferrer">
                        <Icon name="Send" size={18} />
                        Открыть канал
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-2xl font-bold text-primary">Виктория</h3>
              <p className="text-foreground/50">
                Винтажное кимоно • Керамика ручной работы 🐱
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary hover:bg-primary/10 hover:text-primary"
              >
                <Icon name="Send" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary hover:bg-primary/10 hover:text-primary"
              >
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>
          <div className="mt-8 border-t border-primary/10 pt-8 text-center text-sm text-foreground/40">
            <p>© 2024 Виктория. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;