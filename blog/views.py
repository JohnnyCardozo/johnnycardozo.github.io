from django.shortcuts import render, get_object_or_404
from blog.models import ImagensJogos

# Create your views here.
def index(request):
    imagens = ImagensJogos.objects.all()

    return render(request, 'paginas/index.html', {"cards": imagens})

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

def artigo_escrito(request, artigo_id):
    artigo = get_object_or_404(ImagensJogos, pk=artigo_id)

    return render(request, 'paginas/artigoEscrito.html', {"artigo": artigo})