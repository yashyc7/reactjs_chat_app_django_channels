from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework.decorators import api_view
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
@api_view(['POST'])
def register_user(response):
    serializer=UserSerializer(data=response.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=201)
    return Response(serializer.errors,status=400)