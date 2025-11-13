import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSlideshow, setIsSlideshow] = useState(false);

  const photos = [
    {
      url: 'https://cdn.poehali.dev/files/954c3c6b-8943-4e63-9000-e0a5ade148da.jpg',
      caption: 'Семейные воспоминания'
    },
    {
      url: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800',
      caption: 'Счастливые моменты'
    },
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
      caption: 'Вместе навсегда'
    }
  ];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    if (isSlideshow) {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isSlideshow, photos.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djI4aDI4VjE2SDM2ek0xNCAxNnYyOGgyOFYxNkgxNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Видео Открытка
          </h1>
          <p className="text-xl text-white/90 drop-shadow">
            Моменты, которые мы храним в сердце
          </p>
        </div>

        <Tabs defaultValue="video" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/10 backdrop-blur-md border border-white/20">
            <TabsTrigger 
              value="video" 
              className="data-[state=active]:bg-white data-[state=active]:text-primary text-white font-semibold"
            >
              <Icon name="Video" size={20} className="mr-2" />
              Видео
            </TabsTrigger>
            <TabsTrigger 
              value="music" 
              className="data-[state=active]:bg-white data-[state=active]:text-primary text-white font-semibold"
            >
              <Icon name="Music" size={20} className="mr-2" />
              Музыка
            </TabsTrigger>
            <TabsTrigger 
              value="photos" 
              className="data-[state=active]:bg-white data-[state=active]:text-primary text-white font-semibold"
            >
              <Icon name="Image" size={20} className="mr-2" />
              Фото
            </TabsTrigger>
          </TabsList>

          <TabsContent value="video" className="animate-fade-in">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8">
              <div className="aspect-video bg-black/50 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <video 
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1465146633011-14f8e0781093?w=1200"
                  controls
                >
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Наша История</h3>
                <p className="text-white/80">Особенные моменты, запечатленные на видео</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="music" className="animate-fade-in">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float shadow-2xl">
                  <Icon name={isPlaying ? "Pause" : "Play"} size={80} className="text-white" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">Наша Мелодия</h3>
                  <p className="text-xl text-white/80 mb-6">Музыка наших сердец</p>
                </div>

                <div className="w-full max-w-md space-y-4">
                  <div className="flex items-center space-x-4">
                    <Button
                      size="lg"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="rounded-full w-16 h-16 bg-white text-primary hover:bg-white/90 shadow-lg"
                    >
                      <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
                    </Button>
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div
                        key={i}
                        className="h-16 bg-white/20 rounded animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="photos" className="animate-fade-in">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8">
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative group">
                  <img
                    src={photos[currentPhotoIndex].url}
                    alt={photos[currentPhotoIndex].caption}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    key={currentPhotoIndex}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-2xl font-semibold drop-shadow-lg">
                      {photos[currentPhotoIndex].caption}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button
                      onClick={() => setIsSlideshow(!isSlideshow)}
                      className={`rounded-full ${isSlideshow ? 'bg-accent' : 'bg-white'} hover:scale-110 transition-all`}
                    >
                      <Icon name={isSlideshow ? "Pause" : "Play"} size={20} />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={prevPhoto}
                    className="text-white hover:bg-white/20 rounded-full w-14 h-14"
                  >
                    <Icon name="ChevronLeft" size={32} />
                  </Button>

                  <div className="flex space-x-2">
                    {photos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPhotoIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentPhotoIndex
                            ? 'bg-white w-8'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={nextPhoto}
                    className="text-white hover:bg-white/20 rounded-full w-14 h-14"
                  >
                    <Icon name="ChevronRight" size={32} />
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  {photos.map((photo, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden transition-all ${
                        index === currentPhotoIndex
                          ? 'ring-4 ring-white scale-105'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
            <p className="text-white/90 text-lg">
              Сделано с <Icon name="Heart" size={20} className="inline text-red-400 animate-pulse" /> для особенных моментов
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;