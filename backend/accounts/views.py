from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework.decorators import api_view
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
# Create your views here.
@csrf_exempt
@api_view(['POST'])
def register_user(response):
    serializer=UserSerializer(data=response.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)