from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'paginas/index.html')

def video_games(request):
    return render(request, 'paginas/videoGames.html')

def jogos_tabuleiro(request):
    return render(request, 'paginas/jogosTabuleiro.html')

def economia(request):
    return render(request, 'paginas/economia.html')

def artigos(request):
    return render(request, 'paginas/artigos.html')

def sobre_mim(request):
    return render(request, 'paginas/sobreMim.html')

def publicacao(request):
    return render(request, 'paginas/publicacao.html')

def cadastro_jogo(request):
    return render(request, 'paginas/cadastroJogo.html')