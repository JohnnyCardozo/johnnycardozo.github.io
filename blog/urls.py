from django.urls import path
from blog.views import index, video_games, jogos_tabuleiro, economia, artigos, sobre_mim

urlpatterns = [
    path('', index, name='index'),
    path('paginas/', video_games, name='videoGames'),
    path('paginas/', jogos_tabuleiro, name='jogosTabuleiro'),
    path('paginas/', economia, name='economia'),
    path('paginas/', artigos, name='artigos'),
    path('paginas/', sobre_mim, name='sobreMim'),
]