from rest_framework.decorators import (
    api_view,
    permission_classes,
    authentication_classes,
)
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from .serializer import UserGetSerializer
from rest_framework.permissions import IsAuthenticated
from accounts.tokenauthentication import JWTAuthentication


# Create your views here.
User = get_user_model()


@api_view(["GET"])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def get_user_list(request):
    try:
        user_objs = User.objects.exclude(id=request.user.id)
        serializer = UserGetSerializer(user_objs, many=True)
        return Response(serializer.data, status=200)
    except Exception as e:
        print("Error in users in list", str(e))
        return Response({"error": "Error in getting users list"}, status=400)
