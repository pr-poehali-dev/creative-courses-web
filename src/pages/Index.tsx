import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const courses = [
    {
      id: 1,
      title: "Фотография с нуля",
      description: "Научитесь создавать профессиональные снимки с любой камерой",
      image: "https://cdn.poehali.dev/projects/1e2031c6-bf40-405f-8388-c0ebbb96dfe7/files/75514da5-6a2c-4d88-8530-d7e76fd7e2c8.jpg",
      instructor: "Мария Светлова",
      duration: "8 недель",
      level: "Начинающий",
      price: "12 900 ₽",
      students: 234,
      rating: 4.9
    },
    {
      id: 2,
      title: "Живопись акварелью",
      description: "Откройте мир акварельной живописи и создайте свои первые шедевры",
      image: "https://cdn.poehali.dev/projects/1e2031c6-bf40-405f-8388-c0ebbb96dfe7/files/c1a78708-75cb-490c-afae-42e1171aab49.jpg",
      instructor: "Анна Краскова",
      duration: "6 недель",
      level: "Начинающий",
      price: "9 900 ₽",
      students: 412,
      rating: 5.0
    },
    {
      id: 3,
      title: "Гитара для начинающих",
      description: "Освойте базовые аккорды и сыграйте любимые песни",
      image: "https://cdn.poehali.dev/projects/1e2031c6-bf40-405f-8388-c0ebbb96dfe7/files/a41293cd-aabc-4bc0-b439-e82e22b673a1.jpg",
      instructor: "Дмитрий Струнов",
      duration: "10 недель",
      level: "Начинающий",
      price: "11 500 ₽",
      students: 567,
      rating: 4.8
    }
  ];

  const features = [
    {
      icon: "Palette",
      title: "Творческая свобода",
      description: "Выражайте себя через искусство без ограничений"
    },
    {
      icon: "Users",
      title: "Опытные преподаватели",
      description: "Учитесь у практикующих художников и мастеров"
    },
    {
      icon: "Clock",
      title: "Гибкий график",
      description: "Занимайтесь в удобное для вас время"
    },
    {
      icon: "Award",
      title: "Сертификаты",
      description: "Получите подтверждение своих достижений"
    }
  ];

  const testimonials = [
    {
      name: "Екатерина М.",
      course: "Акварельная живопись",
      text: "Никогда не думала, что смогу рисовать! Курс открыл во мне творческий потенциал, о котором я не знала.",
      avatar: "🎨"
    },
    {
      name: "Алексей П.",
      course: "Фотография",
      text: "Профессиональный подход и понятные объяснения. Теперь мои фотографии в Instagram набирают тысячи лайков!",
      avatar: "📸"
    },
    {
      name: "Ольга К.",
      course: "Гитара",
      text: "Спасибо за терпение и поддержку! За 2 месяца научилась играть любимые композиции.",
      avatar: "🎸"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              CreativeSpace
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">Курсы</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
          </nav>
          <Button className="rounded-full">Войти</Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS0yNCAwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="outline" className="border-primary text-primary">Онлайн-обучение</Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Раскрой свой{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  творческий потенциал
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Научись создавать искусство, которое вдохновляет. Онлайн-курсы от практикующих мастеров своего дела.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  Выбрать курс
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  Узнать больше
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Учеников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">25+</div>
                  <div className="text-sm text-muted-foreground">Курсов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">4.9</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://cdn.poehali.dev/projects/1e2031c6-bf40-405f-8388-c0ebbb96dfe7/files/a41293cd-aabc-4bc0-b439-e82e22b673a1.jpg"
                alt="Творческое пространство"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-secondary text-secondary">Почему мы?</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Преимущества обучения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              CreativeSpace — это место, где рождаются таланты и воплощаются творческие идеи
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-accent text-accent">Популярные направления</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Наши курсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбери направление и начни свой творческий путь уже сегодня
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent">{course.level}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{course.duration}</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Icon name="Star" className="text-accent fill-accent" size={16} />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Icon name="User" size={16} />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Users" size={16} />
                    <span>{course.students} учеников</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">{course.price}</div>
                  <Button className="rounded-full">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary text-primary">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Истории успеха</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Узнай, что говорят наши ученики о своём творческом путешествии
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-secondary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnptLTI0IDBjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container relative text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Начни своё творческое путешествие</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Присоединяйся к сообществу творческих людей и открой в себе новые таланты
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full shadow-xl hover:shadow-2xl transition-all">
              Смотреть все курсы
              <Icon name="Sparkles" className="ml-2" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white/10">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t bg-background">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={16} />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  CreativeSpace
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Раскрываем творческий потенциал через качественное онлайн-обучение
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Курсы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Фотография</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Рисование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Музыка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дизайн</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 CreativeSpace. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
