from django.urls import path
from blog.views import index, video_games, jogos_tabuleiro, economia, artigos, sobre_mim, publicacao, cadastro_jogo, artigo_escrito

urlpatterns = [
    path('', index, name='index'),
    path('videoGames/', video_games, name='videoGames'),
    path('jogosTabuleiro/', jogos_tabuleiro, name='jogosTabuleiro'),
    path('economia/', economia, name='economia'),
    path('artigos/', artigos, name='artigos'),
    path('sobreMim/', sobre_mim, name='sobreMim'),
    path('publicacao/', publicacao, name='publicacao'),
    path('cadastroJogo/', cadastro_jogo, name='cadastroJogo'),
    path('artigoEscrito/', artigo_escrito, name='artigoEscrito'),
]